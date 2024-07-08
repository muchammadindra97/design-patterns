import {ComponentPrototype} from "./componentPrototype";

export class Button implements ComponentPrototype {
	private size: string = '50px';
	private color: string = '';
	private x: number = 0;
	private y: number = 0;

	clone(): ComponentPrototype {
		const button = new Button();

		button.size = this.size;
		button.color = this.color;
		button.x = this.x;
		button.y = this.y;

		return button;
	}

	render(): void {
		console.log(`Rendering button on (${this.x}, ${this.y}) with color of (${this.color}) and size of (${this.size})`);
	}

	setColor(color: string): this {
		this.color = color;
		return this;
	}

	setLocation(x: number, y: number): this {
		this.x = x;
		this.y = y;
		return this;
	}
}
