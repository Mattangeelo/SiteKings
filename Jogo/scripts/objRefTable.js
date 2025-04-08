const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Tilemap,
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Flash,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Behaviors.Bullet,
		C3.Behaviors.destroy,
		C3.Behaviors.Rotate,
		C3.Plugins.Spritefont2,
		C3.Plugins.Audio,
		C3.Plugins.Mouse,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Behaviors.solid.Acts.SetEnabled,
		C3.Behaviors.Platform.Acts.SetEnabled,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Keyboard.Cnds.OnKeyReleased,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Behaviors.Platform.Cnds.OnStop,
		C3.Behaviors.Platform.Cnds.IsJumping,
		C3.Behaviors.Platform.Cnds.OnLand,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Audio.Acts.StopAll
	];
};
self.C3_JsPropNameTable = [
	{Mosaico: 0},
	{Janela: 0},
	{Sólido: 0},
	{Suporte: 0},
	{Flash: 0},
	{Bau: 0},
	{Platform: 0},
	{Box: 0},
	{Porta: 0},
	{Chave: 0},
	{Bomba: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{Personagem: 0},
	{Sensor_solido: 0},
	{Teclado: 0},
	{Direcao: 0},
	{Piscar: 0},
	{SemMundial: 0},
	{Sensor_Patrulheiro_Direita: 0},
	{Sensor_Patrulheiro_Esquerda: 0},
	{SemMundial_Canhao: 0},
	{Canhao: 0},
	{Projétil: 0},
	{DestruirForaDoLayout: 0},
	{Girar: 0},
	{Bala: 0},
	{Sensor_Canhao: 0},
	{Vida_HUD: 0},
	{Itens_HUD: 0},
	{FonteDeSprites2: 0},
	{DestroyOutsideLayout: 0},
	{Solid: 0},
	{chefao: 0},
	{Audio: 0},
	{jogarNovamente: 0},
	{GameOver: 0},
	{Sim: 0},
	{No: 0},
	{Mouse: 0},
	{Sprite: 0},
	{Titulo: 0},
	{Jogar: 0},
	{Historia: 0},
	{FundoTexto: 0},
	{TextoHistoria: 0},
	{Sprite2: 0},
	{PorcoHistoria: 0},
	{Princesa: 0},
	{Voltar: 0},
	{Vidas: 0}
];

self.InstanceType = {
	Mosaico: class extends self.ITilemapInstance {},
	Janela: class extends self.ISpriteInstance {},
	Suporte: class extends self.ISpriteInstance {},
	Bau: class extends self.ISpriteInstance {},
	Box: class extends self.ISpriteInstance {},
	Porta: class extends self.ISpriteInstance {},
	Personagem: class extends self.ISpriteInstance {},
	Sensor_solido: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	SemMundial: class extends self.ISpriteInstance {},
	Sensor_Patrulheiro_Direita: class extends self.ISpriteInstance {},
	Sensor_Patrulheiro_Esquerda: class extends self.ISpriteInstance {},
	SemMundial_Canhao: class extends self.ISpriteInstance {},
	Canhao: class extends self.ISpriteInstance {},
	Bala: class extends self.ISpriteInstance {},
	Sensor_Canhao: class extends self.ISpriteInstance {},
	Vida_HUD: class extends self.ISpriteInstance {},
	Itens_HUD: class extends self.ISpriteInstance {},
	FonteDeSprites2: class extends self.ISpriteFontInstance {},
	Chave: class extends self.ISpriteInstance {},
	Bomba: class extends self.ISpriteInstance {},
	chefao: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	jogarNovamente: class extends self.ISpriteFontInstance {},
	GameOver: class extends self.ISpriteFontInstance {},
	Sim: class extends self.ISpriteFontInstance {},
	No: class extends self.ISpriteFontInstance {},
	Mouse: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Titulo: class extends self.ISpriteFontInstance {},
	Jogar: class extends self.ISpriteFontInstance {},
	Historia: class extends self.ISpriteFontInstance {},
	FundoTexto: class extends self.ISpriteInstance {},
	TextoHistoria: class extends self.ISpriteFontInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	PorcoHistoria: class extends self.ISpriteInstance {},
	Princesa: class extends self.ISpriteInstance {},
	Voltar: class extends self.ISpriteFontInstance {}
}