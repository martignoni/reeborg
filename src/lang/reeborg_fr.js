
var RUR = RUR || {};

var avance, tourne_a_gauche, examine, rien_devant, rien_a_droite,
    est_face_au_nord, termine, depose, prend, objet_ici, Monde, Permalien,
    transporte, ecrit, au_but, construit_un_mur, pense, print_html, disparait,
    pause, repete, voir_source, son, RobotUsage, mur_devant, mur_a_droite,
    nombre_de_commandes, enregistrement, nouvelles_images_de_robot,
    dans_le_sac, plus_de_robots;

RUR.reset_definitions = function () {
    // robot commands - defined in commands.js
    window.robot_par_defaut = function () {
        var r = Object.create(RobotUsage.prototype);
        r.body = RUR._default_robot_body_();
        return r;
    };
    au_but = RUR._at_goal_;
    construit_un_mur = RUR._build_wall_;
    rien_devant = RUR._front_is_clear_;
    mur_devant = RUR._wall_in_front_;
    transporte = RUR._carries_object_;
    est_face_au_nord = RUR._is_facing_north_;
    dans_le_sac = RUR._in_the_bag_;
    avance = RUR._move_;
    depose = RUR._put_;
    rien_a_droite = RUR._right_is_clear_;
    mur_a_droite = RUR._wall_on_right_;
    objet_ici = RUR._object_here_;
    prend = RUR._take_;
    tourne_a_gauche = RUR._turn_left_;
    repete = RUR._repeat_;
    nombre_d_instructions = RUR._set_max_steps_;
    // utilities - defined in rur_utils.js
    examine = RUR.inspect;
    voir_source = RUR.output.view_source;
    // defined in control.js
    ecrit = RUR.output.write;
    _write = RUR.output._write;
    print_html = RUR.output.print_html;
    termine = RUR.control.done;
    son = RUR.control.sound;
    pense = RUR.control.think;
    pause = RUR.control.pause;
    Monde = RUR.file_io.load_world_from_program;
    nombre_de_robots = RUR._set_max_nb_robots_;
    plus_de_robots = RUR._remove_robots_;
    enregistrement = RUR._recording_;

    nouvelles_images_de_robot = function (image) {
        if (images.est !== undefined) {
            images.east = images.est;
        }
        if (images.ouest !== undefined) {
            images.west = images.ouest;
        }
        if (images.sud !== undefined) {
            images.south = images.sud;
        }
        if (images.nord !== undefined) {
            images.north = images.nord;
        }
        RUR._new_robot_images_(images);
    };

    // The following are for OOP programming in Javascript
    RobotUsage = function (x, y, orientation, tokens)  {
        this.body = RUR.robot.create_robot(x, y, orientation, tokens);
        RUR.world.add_robot(this.body);
    };
    RobotUsage.prototype.au_but = function () {
        RUR.control.at_goal(this.body);
    };

    RobotUsage.prototype.construit_un_mur = function () {
        RUR.control.build_wall(this.body);
    };

    RobotUsage.prototype.rien_devant = function () {
        RUR.control.front_is_clear(this.body);
    };

    RobotUsage.prototype.mur_devant = function () {
        RUR.control.wall_in_front(this.body);
    };


    RobotUsage.prototype.transporte = function () {
        RUR.control.carries_object(this.body);
    };

    RobotUsage.prototype.dans_le_sac = function () {
        RUR.control.in_the_bag(this.body);
    };

    RobotUsage.prototype.est_face_au_nord = function () {
        RUR.control.is_facing_north(this.body);
    };

    RobotUsage.prototype.avance = function () {
        RUR.control.move(this.body);
    };

    RobotUsage.prototype.modele = function(model) {
        RUR.control.set_model(this.body, model);
    };

    RobotUsage.prototype.depose = function () {
        RUR.control.put(this.body);
    };


    RobotUsage.prototype.rien_a_droite = function () {
        RUR.control.right_is_clear(this.body);
    };

    RobotUsage.prototype.mur_a_droite = function () {
        RUR.control.wall_on_right(this.body);
    };


    RobotUsage.prototype.objet_ici = function (obj) {
        RUR.control.object_here(this.body, obj);
    };

    RobotUsage.prototype.prend = function () {
        RUR.control.take(this.body);
    };

    RobotUsage.prototype.tourne_a_gauche = function () {
        RUR.control.turn_left(this.body);
    };
};

RUR.reset_definitions();
