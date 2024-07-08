import {ComponentPrototype} from "./componentPrototype";

export class Dialog implements ComponentPrototype {
	private size: string = '300px';
	private color: string = '';
	private x: number = 0;
	private y: number = 0;

	clone(): ComponentPrototype {
		const dialog = new Dialog();

		dialog.size = this.size;
		dialog.color = this.color;
		dialog.x = this.x;
		dialog.y = this.y;

		return dialog;
	}

	render(): void {
		console.log(`Rendering dialog on (${this.x}, ${this.y}) with color of (${this.color}) and size of (${this.size})`);
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
