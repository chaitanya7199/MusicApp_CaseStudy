import { shallow } from "enzyme";
import UserRegistrationComponent from "../components/UserRegistrationComponent";

describe("User Registration Component Test", () => {

    let component;
    beforeEach(() => {
        component = shallow(<UserRegistrationComponent />);
    });

    it("Registration form", () => {
        const comp = component.find(".card-body");
        expect(comp.length).toBe(1);
    });

    it("Register button", () => {
        const comp = component.find(".form-group");
        expect(comp.length).toBe(3);
    });
});
