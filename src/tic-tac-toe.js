class TicTacToe {
    constructor() {
        this.player = 'x';
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.turns = 0;
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.board[rowIndex][columnIndex]) {
            this.board[rowIndex][columnIndex] = this.player;
            if (this.player === 'x') this.player = 'o';
            else this.player = 'x';
            this.turns++;

            for (let i = 0; i < 3; i++) {
                if (!!this.board[i][1] && this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2])
                    this.winner = this.board[i][0];
                if (!!this.board[1][i] && this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i])
                    this.winner = this.board[0][i];
            }
            if (!!this.board[1][1] && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2])
                this.winner = this.board[1][1];
            if (!!this.board[1][1] && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0])
                this.winner = this.board[1][1];
        }

    }

    isFinished() {
        if (this.winner !== null || this.isDraw())
            return true;
        else
            return false;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        if (this.turns === 9) return true;
        else return false;
    }

    isDraw() {
        if (this.turns === 9 && this.winner === null)
            return true;
        else
            return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
