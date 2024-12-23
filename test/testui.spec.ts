import { test } from "../src/fixture/myfixture";
import ENV from "../src/utlity/env";
import * as testdata from "../src/utlity/testdata.json";

test.describe('Suite 1', () => {
    test('Basic UI Testing', async ({ launch, login, signout }) => {
        await test.step(' Launch letcode.in website', async () => {
            await launch.launch(ENV.URL);
        })

        await test.step('Login into letcode.in', async () => {
            await login.login(testdata.username, testdata.password);
        })

        await test.step('Signout from the application', async () => {
            await signout.signout();
        })


    })
})