import Hero from "components/hero/FullWidthWithImage";
import Card from "components/cards/TabCardGrid.js";
import AnimationRevealPage from "helpers/AnimationRevealPage";

export const Homepage = () => {
	return (
		<AnimationRevealPage>
			<Hero />
			<Card />
		</AnimationRevealPage>
	);
};

export default Homepage;
