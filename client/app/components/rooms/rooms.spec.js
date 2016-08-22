import RoomsModule from './rooms'
import RoomsController from './rooms.controller';
import RoomsComponent from './rooms.component';
import RoomsTemplate from './rooms.html';

describe('Rooms', () => {
  let $rootScope, makeController;

  // beforeEach(window.module(RoomsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RoomsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(RoomsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RoomsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RoomsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RoomsController);
      });
  });
});
