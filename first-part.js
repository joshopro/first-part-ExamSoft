function delay(ms) {
  return function (v) {
    return new Promise((resolve) => setTimeout(() => resolve(v), ms));
  };
}
//Demo
// Promise.resolve('Delay 5000ms')
//   .then(delay(5000))
//   .then((response) => alert(response));


function animateRight(el) {
  let start, previousTimeStamp;
  let done = false;

  function step(timestamp) {
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;

    if (previousTimeStamp !== timestamp) {
      const count = Math.min(0.1 * elapsed, 100);
      el.style.transform = `translateX(${count}px)`;

      if (count === 200) done = true;
    }

    if (elapsed < 1000) {
      if (!done) {
        window.requestAnimationFrame(step);
      }
    }
  }
  window.requestAnimationFrame(step);
}
// demo
// animateRight(document.getElementById('circle'));


function removeDuplicates(xs) {
  const result = xs.filter((key, value) => {
    return xs.indexOf(key) == value;
  });
  return result;
}

//demo
// console.log(removeDuplicates(['A', 'A', 'B', 'C', 'C', 'D', 'D', 'E', 'D']))
