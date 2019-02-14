require(['gitbook'], function(gitbook) {
    var hidePolicy = function(evt) {
        if (evt) { evt.preventDefault(); }

        localStorage.setItem('hasAgreedPolicy', true);
        document.getElementById('policy').style.display = 'none';
    };

    gitbook.events.on('page.change', function() {
        document
            .getElementById('agree-policy')
            .addEventListener('click', hidePolicy);

        if (localStorage.getItem('hasAgreedPolicy')) {
            hidePolicy();
        }
    });
});
