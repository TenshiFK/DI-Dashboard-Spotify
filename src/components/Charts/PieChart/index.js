import { PieChart } from "@mui/x-charts"
import React, { useContext } from "react"
import { SpotifyContext } from "../../../Contexts/spotify"
import '../../../assets/styles/colors.css';

export default function CicleChart(){
    const{ genres } = useContext(SpotifyContext);

    const topThreeGenres = genres.sort((a, b) => b.count - a.count).slice(0, 3);

    const customColors = [`var(--third-green)`, `var(--main-gray)`, `var(--main-white)`];

    return(
        <PieChart
        series={[
            {
                data: topThreeGenres.map((genre, index) => ({ id: genre.name, value: genre.count, label: genre.name, color: customColors[index], })),
            },
        ]}
        width={1000}
        height={230}
        />
    )
}