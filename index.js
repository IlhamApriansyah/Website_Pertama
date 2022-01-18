
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
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Lu anime yh bang?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'adalah gwej',
            cancelButtonText: 'Wakaranai',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                window.location.href= 'Anime/anime.html',
              )
            } else  {
              swalWithBootstrapButtons.fire({
                title: 'Tch, kukira anime',
                showConfirmButton: false,
                timer: 2000
              }) 
            }
          })
        }