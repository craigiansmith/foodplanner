// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();
(function() {
    var modalBG = document.querySelector('.modal-background');
    var modal = document.querySelector('.modal');
    modalBG.addEventListener('click', function() {
        modal.classList.toggle('is-active');
    });
})();
(function() {
    var modalButton = document.querySelector('#modal-button');
    var modal = document.querySelector('.modal');
    modalButton.addEventListener('click', function() {
        modal.classList.toggle('is-active');
    });
})();
