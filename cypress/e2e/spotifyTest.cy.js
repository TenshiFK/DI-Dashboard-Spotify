describe('Testes com a Dashboard do Spotify', () => {

  it('Deve carregar a página inicial', () => {
    cy.viewport(1440, 720)

    cy.visit('http://localhost:3000/');
    cy.get('h1').should('contain', 'Acompanhe suas tendências musicais e estatísticas com uma dashboard personalizada do Spotify.');
    
    cy.wait(5000);

    cy.get('button').should('contain', 'Acesse aqui');
    cy.get('.navbar button').should('have.length.gt', 0);

    cy.wait(6000);
  })

  it('Deve redirecionar para pagina de login do spotify', () => {
    cy.viewport(1440, 720)

    const SPOTIFY_CLIENT_ID = '3a358ff835a04f228121326266278a6d';
    const REDIRECT_URI = 'http://localhost:3000/dashboard';
    const SCOPE = 'user-top-read%20user-read-recently-played%20playlist-read-private%20playlist-read-collaborative%20user-read-email%20user-read-email';
  
    cy.visit(`https://accounts.spotify.com/authorize/?client_id=${SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPE)}&show_dialog=true`);
    
    cy.wait(6000);
  });

  it('Deve dar uma mensagem de erro caso se tente logar com uma conta inválida do spotify', () => {
    cy.viewport(1440, 720)

    cy.loginErrado();

    cy.origin('https://accounts.spotify.com/', () => {
      
      cy.get('span.Message-sc-15vkh7g-0.dHbxKh').should('contain', 'Nome de usuário ou senha incorretos.')
  
    })

    cy.wait(8000);
  });  

  it('Deve retornar o usuário para a página inicial caso tente acessar a dashboard sem login', () => {
    cy.viewport(1440, 720)

    cy.visit('http://localhost:3000/');
    
    cy.wait(3000);

    cy.visit('http://localhost:3000/dashboard');

    cy.wait(3000);

    cy.url().should('eq', 'http://localhost:3000/');

    cy.wait(6000);
  })

  it('Deve redirecionar para a página de dashboard após login e permitir logout', () => {
    cy.viewport(1440, 720);

    cy.login();

    cy.url().should('include', '/dashboard');

    cy.wait(8000);

    cy.logout();

    cy.wait(4000);
  })

  it('As requisições para a API do spotify devem ter como resposta 200, nome do usuário e gráficos devem aparcer na tela', () => {
    cy.viewport(1440, 720)
    
    cy.login();
    
    cy.wait(8000);

    cy.get('span.px-2')
      .should('exist')
      .should('not.be.undefined');

    cy.get('svg.css-13aj3tc-MuiChartsSurface-root')
      .should('exist')

    cy.wait(8000)

    cy.logout();

    cy.wait(4000);
  
  })

  it('A página de playlists deve ser renderizada com playlists', () => {
    cy.viewport(1440, 720)
    cy.login();
    
    cy.wait(8000);

    cy.get('button').eq(1).click();

    cy.get('img')  
      .should('exist')
      .should('not.be.undefined');
    cy.get('h3')
        .should('exist')
        .should('not.be.undefined');
    cy.get('p')
      .should('exist')
      .should('not.be.undefined');

    cy.wait(8000)

    cy.get('button').eq(0).click();

    cy.wait(4000);

    cy.logout();

    cy.wait(4000);

  })

  it('A página de Top Artistas deve ser renderizada com artistas', () => {
    cy.viewport(1440, 720)

    cy.login();
      
    cy.wait(10000);

    cy.get('button').eq(2).click();

    cy.get('h4.titulo-artista')  
      .should('exist')
      .should('not.be.undefined');
    cy.get('img')
        .should('exist')
        .should('not.be.undefined');
    cy.get('p')
      .should('exist')
      .should('not.be.undefined');

    cy.wait(8000)

    cy.get('button').eq(0).click();

    cy.wait(4000);

    cy.logout();

    cy.wait(4000);

  })

  it('A página de Top Músicas deve ser renderizada com músicas', () => {
    cy.viewport(1440, 720);

    cy.login();

    cy.wait(10000);

    cy.get('button').eq(3).click();

    cy.get('h4.titulo-artista')  
      .should('exist')
      .should('not.be.undefined');
    cy.get('img')
        .should('exist')
        .should('not.be.undefined');
    cy.get('p')
      .should('exist')
      .should('not.be.undefined');

    cy.wait(8000)

    cy.get('button').eq(0).click();

    cy.wait(4000);

    cy.logout();

    cy.wait(4000);
  
  })


})