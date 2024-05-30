import { BarChart } from "@mui/x-charts";
import { useContext } from "react";
import { SpotifyContext } from "../../../Contexts/spotify";
import '../../../assets/styles/colors.css';


export default function BarCharts(){
    const { artists } = useContext(SpotifyContext);

    const customColors = [`var(--main-gray)`];

    const sortedAndLimitedArtists = [...artists].sort((a, b) => b.popularity - a.popularity).slice(0, 8);

    const artistNames = sortedAndLimitedArtists.map(artist => artist.name);
    const artistPopularities = sortedAndLimitedArtists.map((artist) => artist.popularity);
    
    return (
        <BarChart
            xAxis={[{ scaleType: 'band', data: artistNames }]}
            yAxis= {[{ label: 'Popularidade' }]}
            series={[{ data: artistPopularities, color: customColors }]}
            grid={{ horizontal: true }}
            height={400}
        />
    );
}