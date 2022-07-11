function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
        };
    },
    methods: {
        attackMonster() {
            const attackValue = getRandomValue(5,12);
            this.monsterHealth -= attackValue;
            if(this.monsterHealth <= 0) {
                this.monsterHealth = 0;
                alert('you win')
            }
            this.attackPlayer();
            if(this.playerHealth <= 0) {
                this.playerHealth = 0;
                alert('you lose')
            }
        },
        attackPlayer() {
            const attackValue = getRandomValue(8,15);
            this.playerHealth -= attackValue;
        }
    }
});

app.mount('#game');