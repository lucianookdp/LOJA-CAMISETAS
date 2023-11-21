import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
import app from '../server.js';

chai.use(chaiHttp);

describe('GET /main.html', () => {
  it('deve retornar a página inicial das camisas', (done) => {
    chai.request(app)
      .get('/main.html')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.include('Nossos Produtos');
        done();
      });
  });
});
