import { LineChart } from "@mui/x-charts";
import '../../../assets/styles/colors.css';
import { useContext } from "react";
import { SpotifyContext } from "../../../Contexts/spotify";

export default function LineCharts() {
    const { tracks } = useContext(SpotifyContext);

    const customColors = [`var(--third-green)`];

    const sortedAndLimitedTracks = [...tracks].sort((a, b) => b.popularity - a.popularity).slice(0, 8);

    // Truncando os nomes das músicas que têm mais de 12 caracteres
    const truncadeNames = sortedAndLimitedTracks.map(track => track.name.length > 12? `${track.name.substring(0, 9)}...` : track.name);

    const tracksPopularities = sortedAndLimitedTracks.map((track) => track.popularity);

    return (
        <LineChart
            series={[{ curve: "linear", data: tracksPopularities, color: customColors }]}
            xAxis={[{ scaleType: 'point', data: truncadeNames}]}
            height={400}
        />
    );
}
