window.onload = function() {
  const headerNodes = [1, 2, 3, 4, 5, 6].reduce((result, current) => {
    result.push(...document.querySelectorAll(`h${current}.articleHeader`));
    return result;
  }, []);
  headerNodesOffsetTop = headerNodes.map(v => v.offsetTop);
  // flag 节流
  let flag = false;
  document.addEventListener('scroll', function() {
    if (flag)
      return;
    flag = true;
    window.setTimeout(function() {
      let scrollTop = document.documentElement.scrollTop;
      const activeIndex = headerNodesOffsetTop.map(v => v - scrollTop).filter(v => v <= 0).length - 1;
      console.log(activeIndex);
      flag = false;
    }, 100);
  }, false);

  function setActiveHeader(index) {
    const highLightHeader = document.querySelector('#hightlight-header');
    
    if (index === -1) {
      highLightHeader.style.display = 'none';

    }

  }
};
