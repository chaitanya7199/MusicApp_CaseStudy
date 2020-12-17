import { shallow } from "enzyme";
import UserLoginComponent from "../components/UserLoginComponent";

describe("User Login Component Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<UserLoginComponent />);
    });

    it("Login form", () => {
        const comp = component.find(".form-group");
        expect(comp.length).toBe(2);
    });

    it("Testing data-test", () => {
        const comp = component.find(`[data-test='cardContent']`);
        expect(comp.length).toBe(1);
    });

    it("Login Button", () => {
        const comp = component.find(".container");
        expect(comp.length).toBe(1);
    });
});
