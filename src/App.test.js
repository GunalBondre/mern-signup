import {
  render,
  cleanup,
  fireEvent,
  screen,
  getAllByRole,
  getByRole,
  getByTitle,
  within,
} from "@testing-library/react";
import App from "./App";
import Dropdown from "./component/Dropdown";
afterEach(cleanup);

const options = [
  {
    text: "dropdown-select",
    value: "dropdown-select",
  },
  {
    text: "Option1",
    value: "Option1",
  },
  {
    text: "Option2",
    value: "Option2",
  },
  {
    text: "Option3",
    value: "Option3",
  },
  {
    text: "Option4",
    value: "Option4",
  },
];
test("it runs without crashing", () => {
  render(<Dropdown />);
});

it("gets correct item length", () => {
  const { getByTestId } = render(<Dropdown />);
  const dropdown = getByTestId("dropdown");

  // const display = dropdown.children[0];

  // expect(display.textContent).toBe(options[0].text);
  fireEvent.click(dropdown);

  const listCase = getByTestId("lists");
  const { getAllByRole } = within(listCase);
  const items = getAllByRole("list");
  expect(items.length).toBe(4);
  // console.log(fireEvent.click(items[2]));
  // expect(display.textContent).toBe(options[2].text);
  // const dropdownOptions = getAllByRole(dropdown, "list", { hidden: true });
  // console.log(dropdownOptions);
  // fireEvent.click(dropdownOptions[2]);

  // expect(display.textContent).toBe(options[2].text);

  // console.log(display.textContent);
  // const listGroup = getByTestId("lists");
  // const list = listGroup.children[0];
  // expect(list.textContent).toBe(options[1].text);
});
it("should render list in specific order", () => {
  const { getByTestId } = render(<Dropdown />);
  const dropdown = getByTestId("dropdown");

  const display = dropdown.children[0];

  expect(display.textContent).toBe(options[0].text);
  fireEvent.click(dropdown);

  const listCase = getByTestId("lists");
  const { getAllByRole } = within(listCase);
  const items = getAllByRole("list");

  const listnames = items.map((item) => item.textContent);
  expect(listnames).toMatchInlineSnapshot(`
      Array [
        "Option1",
        "Option2",
        "Option3",
        "Option4",
      ]
    `);
});

it("can change the option on click", () => {
  const { getByTestId } = render(<Dropdown />);
  const dropdown = getByTestId("dropdown");

  const display = dropdown.children[0];

  expect(display.textContent).toBe(options[0].text);
  fireEvent.click(dropdown);

  const listCase = getByTestId("lists");
  const { getAllByRole } = within(listCase);
  const items = getAllByRole("list");
});
 