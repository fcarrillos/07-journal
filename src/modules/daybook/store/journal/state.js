export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), // obtienes una fecha del tipo 126534652645237
            date: new Date().toDateString(),  // obtienes una fecha del tipo sat 23, julio
            text: 'Occaecat consectetur laborum id ullamco proident dolor reprehenderit ea commodo. Anim culpa occaecat veniam ullamco incididunt in nisi exercitation minim eiusmod eiusmod. Cillum aute nostrud enim irure sunt cupidatat consequat Lorem consectetur aliqua id. Voluptate proident sunt minim ad ad irure sint. Aliqua non aliqua est sunt laboris non exercitation ullamco magna.',
            picture: null,  // https://...
        },
        {
            id: new Date().getTime() + 1000, // obtienes una fecha del tipo 126534652645237
            date: new Date().toDateString(),  // obtienes una fecha del tipo sat 23, julio
            text: 'Labore veniam cillum voluptate dolore officia aliqua pariatur velit fugiat laboris ut in minim. Ullamco cupidatat fugiat magna dolor consequat fugiat adipisicing laborum fugiat occaecat consequat elit. Magna ullamco ad nisi occaecat adipisicing elit ipsum.',
            picture: null,  // https://...
        },
        {
            id: new Date().getTime() + 2000, // obtienes una fecha del tipo 126534652645237
            date: new Date().toDateString(),  // obtienes una fecha del tipo sat 23, julio
            text: 'Enim velit consectetur minim nulla. Sunt dolore dolor tempor sit dolor. In est sint nisi ad. Tempor sunt veniam eiusmod incididunt tempor. Mollit est enim irure eiusmod esse dolor deserunt anim irure quis ea tempor anim. Aliquip aute occaecat in duis eu ipsum.',
            picture: null,  // https://.....................
        },
    ]
})