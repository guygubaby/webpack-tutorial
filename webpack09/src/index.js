console.log('it works');

// 异步引入第三方模块
function getComponent() {
  return import(/* webpackChunkName:"vendor-lodash" */ 'lodash').then(
    ({ default: _ }) => {
      var element = document.createElement('div');
      element.innerHTML = _.join(['bryce', 'loskie'], '-');
      return element;
    }
  );
}

getComponent().then((element) => {
  document.body.appendChild(element);
});
