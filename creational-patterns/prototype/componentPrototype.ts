export interface ComponentPrototype {
	setColor(color: string): this

	setLocation(x: number, y: number): this

	render(): void

	clone(): ComponentPrototype
}
