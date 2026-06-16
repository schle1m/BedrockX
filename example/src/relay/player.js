class Player {
    constructor(player) {
        this.player = player;

        player.on("clientbound", async ({ name, params }, des) => {
            
        })

        player.on("serverbound", async ({ name, params }, des) => {
            
        })

        player.on("error", (error) => {
            console.log(error);
        });
    }
}

module.exports = Player;