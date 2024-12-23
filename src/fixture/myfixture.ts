import {test as mytest} from "@playwright/test";
import Launch from "../pages/launch.page";
import Login from "../pages/login.page";
import Signout from "../pages/signout.page";

type pages = {

    launch: Launch,
    login: Login,
    signout: Signout

}

export const test = mytest.extend <pages> ({

    launch: async ({page},use) => await use(new Launch(page)),
    login: async ({page},use) => await use(new Login(page)),
    signout: async({page},use) => await use(new Signout(page))

    
})
