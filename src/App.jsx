import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
import { faker } from '@faker-js/faker';


export function App () {
    const randomUserName1 = faker.internet.userName();
    const randomUserName2 = faker.internet.userName();
    const randomUserName3 = faker.internet.userName();
    return( 

        <>
            <TwitterFollowCard userName={randomUserName1} name={randomUserName1} />
            <TwitterFollowCard userName={randomUserName2} name={randomUserName2} />
            <TwitterFollowCard userName={randomUserName3} name={randomUserName3} />
        </>
    );
}
