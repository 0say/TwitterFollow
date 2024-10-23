import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
import { faker } from '@faker-js/faker';


export function App () {
    const randomUserName1 = faker.internet.userName();
    const randomUserName2 = faker.internet.userName();
    const randomUserName3 = faker.internet.userName();
    return( 
        <section className = "App">
            <TwitterFollowCard userName={randomUserName1}>
            {randomUserName1} 
            </TwitterFollowCard>

            <TwitterFollowCard  userName={randomUserName2}>
            {randomUserName2}
            </TwitterFollowCard>

            <TwitterFollowCard  userName={randomUserName3}>
            {randomUserName3}
            </TwitterFollowCard>

        </section>
    )
}