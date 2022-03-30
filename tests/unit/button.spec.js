import {
  shallowMount
} from '@vue/test-utils'; //vue提供的快速测试的方法
import {
  expect
} from 'chai' // 引入chai
import Button from '@/packages/button.vue'
import Icon from '@/packages/icon' // 引入自己的组件

// 描述测试button组件
describe('button.vue', () => {
  // it后面是测试用例
  it('1.测试slot是否能正常显示', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'por-ui'
      }
    })
    expect(wrapper.text()).to.equal('por-ui')
  })
  it('2.测试传入icon属性', () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        'por-icon': Icon
      },
      propsData: {
        icon: 'edit' // 传入的是edit 测试一下 edit是否ok
      }
    })
    expect(wrapper.find('use').attributes('href')).to.equal('#edit')
  })
  it('3.测试传入loading,是否能，控制loading属性', () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        'por-icon': Icon
      },
      propsData: {
        loading: true // 传入的是edit 测试一下 edit是否ok
      }
    })
    expect(wrapper.find('use').attributes('href')).to.eq('#icon-jiazai');
    expect(wrapper.find('button').attributes('disabled')).to.eq('disabled');
  })
  it('4.测试点击按钮', () => {
    const wrapper = shallowMount(Button, {
      stubs: ['por-icon']
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click').length).to.eq(1);
  });
  // 5.测试前后图标
  it('5.测试前后图标', () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        'por-icon': Icon
      },
      slots: {
        default: 'hello'
      },
      attachToDocument: true,
      propsData: {
        iconPosition: 'left',
        icon: 'edit'
      }
    });
    let ele = wrapper.vm.$el.querySelector('span');
    expect(getComputedStyle(ele, null).order).to.eq('2');
    wrapper.setProps({
      iconPosition: 'right'
    });
    return wrapper.vm.$nextTick().then(() => {
      expect(getComputedStyle(ele, null).order).to.eq('1');
    });
  });
})