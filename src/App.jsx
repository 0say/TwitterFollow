/* eslint-disable react/jsx-key */
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
import { faker } from '@faker-js/faker';

const randomUserName1 = faker.internet.userName();
const randomUserName2 = faker.internet.userName();
const randomUserName3 = faker.internet.userName();

const users = [
    {
        userName: randomUserName1,
        name: randomUserName1,
        isFollowing: true
    },
    {
        userName: randomUserName2,
        name: randomUserName2,
        isFollowing: true
    },
    {
        userName: randomUserName3,
        name: randomUserName3,
        isFollowing: true
    }
]
export function App () {
    return( 
        <section className = "App">
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user

            return (
            <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}>
                    {name}
                </TwitterFollowCard>
            )
        })
            }
        </section>
    )
}