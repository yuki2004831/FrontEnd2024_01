describe('テスト大項目01', () => {
    context('テスト中項目01', () =>{
        it('テスト小項目01:ページを開く', () => {
            cy.viewport(1440, 798);
            // top indexにアクセスする
            cy.visit('http://localhost:3333');
        })

        it('テスト小項目02:指定idの要素があるか', () => {
            // https://docs.cypress.io/api/commands/get
            // id要素が存在するか
            cy.get('#top_message').should('exist');
        })
        it('テスト小項目03:指定id top_messageの内容が「トップページばい！」なのか', () => {
            // https://docs.cypress.io/api/commands/get
            // id要素が存在するか
            cy.get('#top_message').should('have.text','トップページばい！');
        })
    })
})
