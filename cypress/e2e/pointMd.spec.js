/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

describe('The user news website journey scenario', function (){

    beforeEach(()=>{
        cy.openHomePage()
    })

    it("The user do a log in the system ", function (){
        // cy.visit('https://point.md/')
        // cy.wait(1500)
        const sentArgs = { username: 'vadimtest123', password: 'vadim#123' }

        cy.get("img.bzie0o-11").click()
        cy.get("button[aria-label='login']").click()

        cy.origin("https://simpalsid.com",
            {args: sentArgs},

            ({username, password}) => {
                cy.visit("/user/login")
                cy.get("input[name='login']").type(username)
                cy.get("input[name='password']").type(password)
                cy.get("button.login__form__footer__submit").click()
            }
        )
        //cy.visit('https://simpalsid.com/user/login?project_id=5107de83-f208-4ca4-87ed-9b69d58d16e1&lang=ru&redirect_url=https://point.md/')
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('the user clicks on  primary news title', function () {
            cy.get("h3.cEwXxo").click()
    });


    // Test for the desktop version

    // it('The user clicks on the logo link', function () {
    //     cy.get("img[alt='logo']").click()
    // });

    it('The user clicks on the logo link md', function () {
        cy.get("img[alt='Point.md logo']").click()
    });

    // Test for the desktop version

    // it('The user wants to check this usd dollar course', function (){
    //     // cy.visit('https://point.md/')
    //     cy.get("input[id='usd']").eq(1)
    //         .click({force:true })
    //         .clear()
    //         .type(35)
    // })

    // Test for the mobile version

    it('The user wants to check this usd dollar course', function (){
        cy.get("img.bzie0o-10").eq(1).click()
        cy.get("input[id='usd']").eq(0)
            .click({force:true })
            .clear()
            .type(35)
    })

    it('the user scroll to the interesting news title', function (){
        cy.scrollTo(0, 4400)
        cy.get("h3").contains("Maximum: Скидки и подарки от Krups, Tefal и Moulinex Ⓟ").click()

    })


})
