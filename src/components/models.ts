export interface Todo {
  id: number;
  content: string;
  name: string;
  vorhanden: boolean;
}

export interface Meta {
  totalCount: number;
}

export class BodenaufbauElement {
  bezeichnung: string;
  imgSrc = 'randomImage6.jpg'
  constructor() {
    this.bezeichnung = 'blub';
  }
}

export class Daemmschicht extends BodenaufbauElement {
  static createOptions(): Daemmschicht[] {
    return [new PSSchaum, new Schuettung, new Minearalwolle, new SonstigesDaemmmaterial]
  }
}

export class PSSchaum extends Daemmschicht {
  bezeichnung = 'PS-Schaum'
  imgSrc = 'randomImage6.jpg'
}
export class Schuettung extends Daemmschicht {
  bezeichnung = 'Schüttung'
  imgSrc = 'randomImage7.jpg'

}
export class Minearalwolle extends Daemmschicht {
  bezeichnung = 'Minearalwolle'
  imgSrc = 'randomImage8.jpg'
}
export class SonstigesDaemmmaterial extends Daemmschicht {
  bezeichnung = 'Sonstiges Dämmmaterial'
  imgSrc = 'randomImage7.jpg'

}


export abstract class Rohdecke extends BodenaufbauElement {
  static createOptions(): Rohdecke[] {
    return [new StahlbetondeckeMassiv(),
      new SonstigeRohdeckeMassiv(),
      new Holzbalkendecke()
    ]
  }
}

export class StahlbetondeckeMassiv extends Rohdecke {
  bezeichnung = 'Massive Stahlbetondecke'
  dicke = 10
  typ = '1N'
}
export class SonstigeRohdeckeMassiv extends Rohdecke {
  bezeichnung = 'Sonstige Rohdecke'
  dicke = 10
  flaechenbezogeneMasse = 12
  typ = '2N'
}
export class Holzbalkendecke extends Rohdecke {
  bezeichnung = 'Holzbalkendecke'
  berechnungMoeglich = false
  typ = 'W'
}

export class Oberbelag extends BodenaufbauElement {
  static createOptions(): Oberbelag[] {
    return [new FlieseKleberKombination, new Parkett, new Laminat]
  }

}

export class FlieseKleberKombination extends Oberbelag {
  dickeFlieseOptions = [8.0, 20.0]
  dickeFliese = this.dickeFlieseOptions[0]

  dickeKleberOptions = [1.0, 2.0, 3.0]
  dickeKleber = this.dickeKleberOptions[0]

  bezeichnung = 'Fliese mit Kleber'
  imgSrc = 'longImage2.jpg'
  typ = '2S'
}
export class Parkett extends Oberbelag {
  befestigungOptions = ['schwimmend', 'verklebt']
  befestigung = this.befestigungOptions[0]
  berechnungMoeglich = false
  imgSrc = 'longImage1.jpg'
  typ = '1S'

  bezeichnung = 'Parkett'
}
export class Laminat extends Oberbelag {
  befestigungOptions = ['schwimmend', 'verklebt']
  befestigung = this.befestigungOptions[0]
  berechnungMoeglich = false
  imgSrc = 'longImage3.jpg'
  typ = '1S'
  bezeichnung = 'Laminat'
}

export class Entkopplungsschicht extends BodenaufbauElement {
  static createOptions(): Entkopplungsschicht[] {
    return [new DitraDefault, new DitraHeatDefault, new DitraHeatDuo, new DitraSound]
  }
}

export class DitraDefault extends Entkopplungsschicht {
  bezeichnung = 'Ditra'
  imgSrc = 'longImage1.jpg'
}
export class DitraHeatDefault extends Entkopplungsschicht {
  bezeichnung = 'Ditra Heat'
  imgSrc = 'longImage3.jpg'
}
export class DitraHeatDuo extends Entkopplungsschicht {
  bezeichnung = 'Ditra Heat Duo'
  imgSrc = 'longImage2.jpg'
}
export class DitraSound extends Entkopplungsschicht {
  bezeichnung = 'Ditra Sound'
  imgSrc = 'longImage3.jpg'

}

export abstract class EstrichNoppenplatte extends BodenaufbauElement {
  static createOptions(): EstrichNoppenplatte[] {
    return [new EN12FK, new EN18FTS, new EN23F, new ENP_ENPF, new Estrich]
  }
}

export class EN12FK extends EstrichNoppenplatte {
  bezeichnung = 'EN12FK'
  dickeOptions = [8.0, 20.0]
  dicke = this.dickeOptions[0]
  typ = '1S'
  imgSrc = 'longImage3.jpg'
}

export class EN18FTS extends EstrichNoppenplatte {
  bezeichnung = 'EN18FTS'
  dickeOptions = [8.0, 20.0]
  dicke = this.dickeOptions[0]
  typ = '1S'
  imgSrc = 'longImage2.jpg'
}

export class EN23F extends EstrichNoppenplatte {
  bezeichnung = 'EN23F'
  dickeOptions = [8.0, 20.0]
  dicke = this.dickeOptions[0]
  typ = '1S'
  imgSrc = 'longImage1.jpg'
}

export class ENP_ENPF extends EstrichNoppenplatte {
  bezeichnung = 'ENP/F'
  dickeOptions = [8.0, 20.0]
  dicke = this.dickeOptions[0]
  typ = '1S'
  imgSrc = 'longImage2.jpg'
}

export class Estrich extends EstrichNoppenplatte {
  bezeichnung = 'Estrich'
  rohdichte = 10
  dicke = 20
  typ = '2N'
  imgSrc = 'longImage3.jpg'

}

export class Zwischenschicht extends BodenaufbauElement {
  peFolieVorhanden = false
  sonstigesVorhanden = false
  dickeSonstiges = 24
  imgSrc = 'longImage2.jpg'
}

export class TrittschallPrognose {
  bodenaufbau: Bodenaufbau | null = null
  lwr = 0.0
  erstellt: number
  constructor() {
    this.erstellt = Date.now()
  }
}

export class Bodenaufbau {
  estrichNoppenplatte: EstrichNoppenplatte | null = null
  zwischenschicht: Zwischenschicht | null = null
  entkopplungsschicht: Entkopplungsschicht | null = null
  oberbelag: Oberbelag | null = null
  daemmschicht: Daemmschicht | null = null
  rohdecke: Rohdecke | null = null

  public getAufbau(): BodenaufbauElement[] {
    const myResult: BodenaufbauElement[] = []
    if (this.estrichNoppenplatte != null) {
      myResult.push(this.estrichNoppenplatte)
    }
    if (this.oberbelag != null) {
      myResult.push(this.oberbelag)
    }
    return myResult;
  }


}