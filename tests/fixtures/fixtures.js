import {test as base} from 'playwright-bdd'
import {ecomRego} from '../pages/ecomregoObj'

export const test = base.extend(({

    ecomRegoPage: async({page}, use) => {

        const rego = new ecomRego(page)
        await use(rego)
    }
}))