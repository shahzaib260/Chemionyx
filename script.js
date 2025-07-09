<script>
  let scrollPos = window.scrollY;
  let ticking = false;

  function smoothScroll() {
    const currentScroll = window.scrollY;
    scrollPos += (currentScroll - scrollPos) * 0.1; // smooth easing
    window.scrollTo(0, scrollPos);

    if (Math.abs(currentScroll - scrollPos) > 0.5) {
      requestAnimationFrame(smoothScroll);
    } else {
      ticking = false;
    }
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(smoothScroll);
      ticking = true;
    }
  });
</script>
