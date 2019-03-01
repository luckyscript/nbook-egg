window.onload = function() {
  const headerNodes = [1, 2, 3, 4, 5, 6].reduce((result, current) => {
    result.push(...document.querySelectorAll(`h${current}.articleHeader`));
    return result;
  }, []);
  const headerNodesOffsetTop = headerNodes.map(v => v.offsetTop);

  const tocListNodes = document.querySelectorAll('li.toc-list');

  // flag 节流
  let flag = false;
  handleScroll();
  
  document.addEventListener('scroll', handleScroll, false);

  function handleScroll () {
    if (flag)
      return;
    flag = true;
    window.setTimeout(function() {
      let scrollTop = document.documentElement.scrollTop;
      const activeIndex = headerNodesOffsetTop.map(v => v - scrollTop).filter(v => v <= 0).length - 1;
      setActiveHeader(activeIndex);
      flag = false;
    }, 10);
  }

  function setActiveHeader(index) {
    const highLightHeader = document.querySelector('#highlight-header');
    tocListNodes.forEach(toc => {
      toc.className = 'toc-list';
    })
    if (index === -1) {
      highLightHeader.style.top = 0;
      tocListNodes[0].className = 'toc-list active';
    } else {
      highLightHeader.style.top = index * 28 + 'px';
      tocListNodes[index].className = 'toc-list active';
    }

  }
};
