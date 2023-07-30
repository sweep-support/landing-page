import React, { useEffect } from 'react';
import Phaser from 'phaser';
import sweepLogo from '../assets/sweepLogo.png';

const Game = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      },
      scene: {
        preload: preload,
        create: create,
        update: update
      }
    };

    new Phaser.Game(config);

    function preload() {
      this.load.image('sweep', sweepLogo);
    }

    function create() {
      this.add.image(400, 300, 'sweep');
    }

    function update() {
      // Game update logic
    }
  }, []);

  return (
    <div id="phaser-game" style={{ width: '100%', height: '100%' }} />
  );
};

export default Game;