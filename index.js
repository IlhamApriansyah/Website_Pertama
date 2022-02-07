  function EasterEgg(){
    window.location.href="https://github.com/IlhamApriansyah"
  }


  function AlertHome(){
        Swal.fire({
            title: 'Selamat datang di website serbaguna',
            showConfirmButton: false,
            width: 600,
            padding: '3em',
            timer: 10000,
            color: '#ffffff',
            background: 'rgba(0,0,123,0.5)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://sweetalert2.github.io/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
  }

  function AlertAnime() {
      Swal.fire({
        title: 'Kamu anime yh bang?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Haikk',
        cancelButtonText: 'Wakaranai'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            window.location.href="Anime/anime.html",
          )
        }
      })
  }