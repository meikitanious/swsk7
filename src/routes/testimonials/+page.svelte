<script>
	import { onMount } from 'svelte';

  onMount(() => {
    const slides = document.getElementsByClassName("slide");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");

    let slideNumber = 0;

    const hideSlides = () => {
      Array.from(slides).forEach((slide) => {
        slide.style.display = 'none';
      })
    }

    hideSlides();

    slides[slideNumber].style.display = 'flex';
    
    next?.addEventListener('click', () => {
      if (slideNumber == slides.length - 1) {
        slideNumber = 0;
      } else {
        slideNumber += 1;
      }

      hideSlides();

      slides[slideNumber].style.display = 'flex';
    })

    prev?.addEventListener('click', () => {
      if (slideNumber == 0) {
        slideNumber = slides.length - 1;
      } else {
        slideNumber -= 1;
      }

      hideSlides();

      slides[slideNumber].style.display = 'flex';
    })
  })
</script>

<div class="testimonials">
  <div class="testimonials-heading">
    <h1>Why work with us?</h1>
    <p>Hear it from our clients.</p>
  </div>
  <div class="testiomonials-slider">
    <div class="slide">
      <video controls>
        <source src="/videos/whales.mp4" type="video/mp4">
      </video>
      <h2>Jeff Snow</h2>
      <p>VP of Growth @NZXT</p>
    </div>
    <div class="slide">
      <video controls>
        <source src="/videos/whales.mp4" type="video/mp4">
      </video>
      <h2>Not Jeff Snow 2</h2>
      <p>Not VP of Growth @NZXT 2</p>
    </div>
    <div class="slide">
      <video controls>
        <source src="/videos/whales.mp4" type="video/mp4">
      </video>
      <h2>Not Jeff Snow</h2>
      <p>Not VP of Growth @NZXT</p>
    </div>
  </div>
  <div class="slide-controls">
    <div id="prev">Previous</div>
    <div id="next">Next</div>
  </div>
</div>

<style lang=scss>
  .testimonials {
    height: calc(100vh - 100px);
    max-width: 1200px;
    margin: 0 auto;
    color: white;

    .testimonials-heading {
      @include flex(column, center, center);

      h1 {
        font-size: 270%;
        font-weight: 700;
        text-transform: capitalize;
      }

      p {
        font-size: 160%;
        font-size: 600;
      }
    }

    .testiomonials-slider {
      position: relative;
      height: 65%;
      max-height: 6ç00px;
      margin: 20px;
      
      .slide {
        border-radius: 5px;
        height: 100%;
        width: 350px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        @include flex(column, center, flex-start);

        video {
          height: 80%;
          object-fit: cover;
          border-radius: 10px;
        }

        h2 {
          font-size: 210%;
          font-weight: 600;
        }

        p {
          font-size: 105%;
        }
      }
    }

    .slide-controls {
      width: 350px;
      margin: 10px auto;
      @include flex(row, center, space-between);

      div {
        background-color: white;
        color: black;
        border-radius: 5px;
        width: 30%;
        padding: 10px;
        text-align: center;
        font-weight: 500;
        font-size: 120%;
        cursor: pointer;

        &:hover {
          position: relative;
          transform: translateY(-5px);
        }
      }
    }
  }  
</style>