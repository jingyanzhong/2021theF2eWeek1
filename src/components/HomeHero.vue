<template>
  <div class="hero">
    <label for="search" class="searchClass">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="searchIcon bi bi-search"
        viewBox="0 0 16 16">
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
      <input type="search" name="search" id="search" placeholder="我想去...">
    </label>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
  background: url(/img/banner1.png) center center no-repeat;
  background-size: cover;
}

.searchClass {
  position: relative;
}

.searchIcon {
  position: absolute;
  left: 15px;
  top: 12px;
  color: rgba(242, 153, 74, 1);
  ;
}

#search {
  width: 783px;
  height: 55px;
  border: 0;
  border-radius: $radius-xl;
  box-shadow: $shadow;
  padding: 0 54px;
  font-size: $fz-xl;
}

input::placeholder {
  color: rgba(189, 189, 189, 1);
}

@media (max-width: 768px) {
  #search {
    width: 560px;
  }
}

@media (max-width: 767px) {
  .hero {
    height: 227px;
  }

  #search {
    width: 324px;
  }
}
</style>
