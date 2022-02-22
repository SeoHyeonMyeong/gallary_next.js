import { useState, useEffect } from "react"
import Seo from "../components/Seo";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const API_KEY = process.env.API_KEY;

export default function Home({ results }) {
    const router = useRouter();
    const onClick = (id, title) => {
        router.push(
            {
                pathname: `/movies/${id}`,
                query: {
                    title,
                },
            },
            `/movies/${id}`
        )
    }
    const [movies, setMovies] = useState();
    useEffect(() => {
        setMovies(results);
    }, []);

    return (
        <div className="container">
            <Seo title="Home" />
            {movies?.map((movie) => (
                <div onClick={()=>onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
                    <img alt={movie.original_title} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <h4>
                        <a>{movie.original_title}</a>
                    </h4>
                </div>
                
              
            ))}
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }
                .movie img {
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                    transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                    font-size: 18px;
                    text-align: center;
                }
            `}</style>
        </div>
    );
}

export async function getServerSideProps() {
    const { results } = await (
        await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
    ).json();
    return {
        props: {
            results,
        },
    };
}