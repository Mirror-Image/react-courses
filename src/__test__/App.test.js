import App from "../App";

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  afterEach(() => {
    wrapper.unmount();
  })

  it('', () => {
    wrapper.find('button').simulate('click');
  })

  it('component should render correctly', () => {
    expect(wrapper.find("[data-test-id='render-text']").text())
      .toBe('The store is Close');

    wrapper.find('button').simulate('click');

    expect(wrapper.find("[data-test-id='render-text']").text())
      .toBe('The store is Open');
  });

  it('component', () => {
    wrapper.find('input').simulate('change', { target: { value: 'MyTest' } });

    console.log(wrapper.debug());

    expect(wrapper.find('p').at(1).text()).toBe('MyTest');
  });
});
