const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const baseURL = "http://localhost:3000";
const AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
});
const getAPIdata = async (url, cb) => {
  AxiosInstance.get(url).then((response) => {
    cb(response.data);
  });
};

const partners_info = document.querySelector(".partners__info");
const why_us_cards = document.querySelector(".why_us__cards");
const courses_cards = document.querySelector(".courses__cards");
const featured__cards = document.querySelector(".featured__cards");

function renderPartners(data) {
  data &&
    data.forEach((element) => {
      partners_info.innerHTML += `
        <div class="partners__info__logo">
                <img src="${element.image}" alt="${element.id}" />
              </div>`;
    });
}

function renderWhyUs(data) {
  data &&
    data.forEach((element) => {
      why_us_cards.innerHTML += `
        <div class="why_us__cards__data d-flex flex-column">
                <img
                  src="${element.image}"
                  alt=""
                  style="background-color: ${element.color}"
                />
                <h4>${element.title}</h4>
                <p>
                  ${element.description}
                </p>
              </div>`;
    });
}

function renderCourses(data) {
  data &&
    data.forEach((element) => {
      courses_cards.innerHTML += `
          <div class="courses__cards__data">
              <img
                src="${element.image}"
                alt=""
                style="background-color: ${element.color}"
              />
              <h3>${element.title}</h3>
              <p>${element.description}</p>
              <a href="">View Lessons <i class="ri-arrow-right-s-line"></i></a>
            </div>`;
    });
}

function renderFeatured(data) {
  data &&
    data.forEach((element) => {
      featured__cards.innerHTML += `
            <div class="featured__cards__item swiper-slide">
                <img
                    src="${element.image}"
                    alt=""
                />
                <div class="featured__cards__item__text">
                    <span>
                        <i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                        <i class="ri-star-line"></i>
                    </span>
                    <h3>${element.title}</h3>
                    <p>
                        <span>In</span> ${element.category}
                    </p>
                    </div>
                    <div
                        class="featured__cards__item__buttons d-flex justify-content-between"
                    >
                        <span>${element.price}</span>
                        <a href="#">
                            <i class="ri-function-line"></i> Get Enrolled
                        </a>
                      </div>
                </div>`;
    });
}

getAPIdata("/partners", (data) => {
  renderPartners(data);
});

getAPIdata("/why_us", (data) => {
  renderWhyUs(data);
});

getAPIdata("/courses", (data) => {
  renderCourses(data);
});

getAPIdata("/featured", (data) => {
  renderFeatured(data);
});
