const{ToDo} = require('./../models/todo');
const{app} = require('./../server');
const request = require('supertest');
const expect = require('expect');

beforeEach((done)=>{//beforeEach: used to execute sth befor we run the test suite
ToDo.remove({}).then(()=>done()); // removes every document in the ToDo collection
});

describe('POST /todos',()=>{
it('should create new to do',(done)=>{
   var text = 'testing post /todos';
    request(app)

     .post('/todos')
     .send({text})
     .expect(200)
     .expect((res)=>{
       expect(res.body.text).toBe(text);
     })
      .end((err,res)=>{
if(err){
    return done(err);
    
}
        
ToDo.find().then((todos)=>{
    expect(todos.length).toBe(1);
    expect(todos[0].text).toBe(text);
    done();
}).catch((e)=>done(e))
    
      });

});

it('should not create todo with invalid data',(done)=>{

    request(app)
    .post('/todos')
    .send({})
    .expect(400)
    .expect((res)=>{
    
        expect(res.body.text).toBe(undefined);

    })
    .end((err,res)=>{
     if(err){
         return done(err);
     }

     ToDo.find().then((todos)=>{
      expect(todos.length).toBe(0);
      done();
     }).catch((e)=>{
       done(e);
     })
    });

});


});

