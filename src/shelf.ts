import { Configuration, IMarbleJar, MarbleJarFactory } from "./marblejar";

export class Shelf {

    jars:IMarbleJar[] = [];

}

const jar = MarbleJarFactory.create(Configuration.LG);

const shelf = new Shelf();
shelf.jars.push(jar);