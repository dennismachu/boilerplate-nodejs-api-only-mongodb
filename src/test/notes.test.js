const { exec } = require("child_process");

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
const server = require('../main/index')
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Person', () => {
    before((done) => { //Before each test we empty the database
        console.log("inside the before statement");
        done();
    });

    after((done) => {
        console.log("inside the done statement");
        --exit
      //   exec("scripts/index.sh", (error, stdout, stderr) => {
      //     if (error) {
      //         console.log(`error: ${error.message}`);
      //         return;
      //     }
      //     if (stderr) {
      //         console.log(`stderr: ${stderr}`);
      //         return;
      //     }
      //     console.log(`stdout: ${stdout}`);
      // });
        done();
      });
/*
  * Test the /GET route
  */
  describe('/GET person', () => {
      it('it should GET all the person', (done) => {
        chai.request(server)
            .get('/api/v1/person')
            .end((err, res) => {
                  res.should.have.status(200);
                //   res.body.should.be.a('array');
                //   res.body.length.should.be.eql(0);
              done();
            });
      });
  });

});