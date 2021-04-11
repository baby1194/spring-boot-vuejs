import { shallowMount } from '@vue/test-utils';
import HelloSpringWorld from '@/components/HelloSpringWorld.vue'

describe('HelloSpringWorld.vue', () => {
  it('should render correct hello message', () => {
    const hellomsg = 'Welcome to your Jest powered Vue.js App'
    // Given
    const hellowrapped = shallowMount(HelloSpringWorld, {
      // see https://stackoverflow.com/a/37940045/4964553
      props: { hellomsg }
    });

    // When
    const contentH1 = hellowrapped.find('h1');

    // Then
    expect(contentH1.text()).toEqual('Welcome to your Jest powered Vue.js App');
  })
})
