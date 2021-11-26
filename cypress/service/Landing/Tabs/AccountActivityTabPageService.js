import AccountActivityTabPage from "../../../page-objects/page/Landing/Tabs/AccountActivityTabPage";
export default class AccountActivityTabPageService {


    static validateAccountActivityTabPageInformation() {
        cy.fixture('./Landing/landing').then(data => {
            cy.contains(data.tab_account_summary)
            cy.contains(data.tab_account_activity)
            cy.contains(data.tab_transfer_funds)
            cy.contains(data.tab_pay_bills)
            cy.contains(data.tab_my_money_map)
            cy.contains(data.tab_online_statements)
        })
    }
}