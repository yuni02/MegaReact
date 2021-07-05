const Router = function(app){
    // 주소와 그에 대한 연결 처리를 관리
    // 주소에 맞는 기능을 가지고 있는 컨트롤러로 연결

    const MainController = require('./controllers/MainController');
    // console.log(MainController);

    // localhost:port
    app.get('/', function(req,res){
        console.log("메인으로 전환")
        res.redirect('/main');
    });

    app.get('/main', function(req,res){
        // console.log('/main 경로로 접속!');
        //  '/main' 주소로 요청이 들어오면 MainController의 mainView를 호출하여 요청에 대한 실질적인 처리를 controller에서 수행시킨다
        MainController.mainView(req,res);
    });

    app.post('/add', function(req,res){
        MainController.addUser(req,res);
    });

    app.post('/create/new', function(req,res){
        MainController.createNewUser(req,res);
    });

    const DetailController = require('./controllers/DetailController');

    // localhost:3000/detail/직원번호
    app.get('/detail/:hr_idx',function(req,res){
        DetailController.detailView(req,res);
    });

    app.delete('/detail/delete/:hr_idx', function(req,res){
        DetailController.detailDeleteUser(req,res);
    });

    app.get('/detail/edit/form/:hr_idx', function(req,res){
        DetailController.detailEditFormView(req,res);
    });

    app.post('/detail/update/:hr_idx', function(req,res){
        DetailController.detailUpdateUser(req,res);
    });

    // 선택 항목 관리
    const SelectionController = require('./controllers/SelectionController');

    app.get('/department/edit/form', function(req,res){
        SelectionController.departmentEditFormView(req,res);
    });

    app.get('/position/edit/form', function(req,res){
        SelectionController.positionEditFormView(req,res);
    });

    app.delete('/selection/delete/:page_type', function(req,res){
        SelectionController.deleteSelectionData(req,res);
    });

    app.post('/selection/add/:page_type', function(req,res){
        SelectionController.createNewSelectionData(req,res);
    });

};

module.exports = Router;