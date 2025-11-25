    document.body.classList.add('fade-in');

    // Interceptar clicks en enlaces internos
    document.querySelectorAll('a[href]').forEach(link => {
        const url = link.getAttribute('href');
        if (url && !url.startsWith('http') && !url.startsWith('#') && !url.startsWith('mailto')) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                document.body.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = url;
                }, 300); // coincide con el tiempo de transición
            });
        }
    });