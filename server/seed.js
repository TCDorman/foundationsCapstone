
require('dotenv').config()
const Sequelize = require('sequelize')

const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})


module.exports = {
    seed: (req, res) => {
    sequelize.query (`
    drop table if exists calendar;
    drop table if exists workout;
    drop table if exists shoulders;
    drop table if exists leg_day;
    drop table if exists chest_and_tri;
    drop table if exists back_and_bi;
    drop table if exists users;

    CREATE TABLE users ( 
        user_id SERIAL PRIMARY KEY,     
        username VARCHAR(3000) NOT NULL, 
        email VARCHAR(3000) NOT NULL, 
        password VARCHAR(3000) NOT NULL, 
        first_name VARCHAR(3000) NOT NULL, 
        last_name VARCHAR(3000) NOT NULL 
    ); 
    
    CREATE TABLE back_and_bi ( 
        back_and_bi_id SERIAL PRIMARY KEY,
        workout_name VARCHAR(100),
        workout_description VARCHAR (4000)
    );  
    
    CREATE TABLE leg_day ( 
        leg_day_id SERIAL PRIMARY KEY,
        workout_name VARCHAR (100),
        workout_description VARCHAR (4000)
    ); 

      
    CREATE TABLE chest_and_tri ( 
        chest_and_tri_id SERIAL PRIMARY KEY, 
        workout_name VARCHAR (100),
        workout_description VARCHAR (4000)
    ); 
    

    CREATE TABLE shoulders ( 
        shoulders_id SERIAL PRIMARY KEY,
        workout_name VARCHAR (100),
        workout_description VARCHAR (4000)
    ); 
    
    CREATE TABLE workout ( 
        workout_id SERIAL PRIMARY KEY, 
        workout_name VARCHAR(3000) NOT NULL, 
        reps INT NOT NULL, 
        rest_time INT NOT NULL, 
        back_and_bi_id INT REFERENCES back_and_bi(back_and_bi_id), 
        leg_day_id INT REFERENCES leg_day(leg_day_id), 
        chest_and_tri_id INT REFERENCES chest_and_tri(chest_and_tri_id), 
        shoulders_id INT REFERENCES shoulders(shoulders_id) 
        ); 
    CREATE TABLE calendar ( 
        calendar_id SERIAL PRIMARY KEY, 
        monday VARCHAR(3000) NOT NULL, 
        tuesday VARCHAR(3000) NOT NULL, 
        wednesday VARCHAR(3000) NOT NULL, 
        thursday VARCHAR(3000) NOT NULL, 
        friday VARCHAR(3000) NOT NULL, 
        saturday VARCHAR(3000) NOT NULL, 
        sunday VARCHAR(3000) NOT NULL, 
        user_id INT REFERENCES users(user_id), 
        workout_id INT REFERENCES workout(workout_id) 
    ); 
            

    insert into users (username, email, password, first_name, last_name)
    values ('cdog', 'colin@colin.com', 1234, 'colin', 'dorman');

    insert into shoulders (workout_name, workout_description)
    
    values('push_ups',
        'exercise performed in a prone position by raising and lowering the body 
    with the straightening and bending of the arms while keeping the back straight and 
    supporting the body on the hands and toes. preform as many as you can before muscle 
    failure'); 
    
    insert into shoulders (workout_name, workout_description)

    values('lateral_raise', 
        'exercise characterized by lifting a pair of dumbbells away from your body in 
    an external rotation. Lateral raises work the trapezius muscle in your upper back as well as the 
    deltoid muscle group in your shoulders—particularly the anterior and lateral deltoids. 
    preform 10-12 reps at a weight that does not cause you to use bad form');

    insert into shoulders (workout_name, workout_description)
    
    values('over_head_press',
        'Stand with your body upright and core muscles braced, looking straight ahead. 
    Hold the bar on your upper chest, gripping it with hands just wider than shoulder-width apart. 
    Press the bar directly overhead. Don"t tilt your hips forward during the move.
    preform 10-12 reps at a weight that does not cause you to use bad form');

    insert into shoulders(workout_name, workout_description)

    values('standing_cable_pulley_fly', 
        'Set the pulleys on a dual-cable machine to chest height, and stand between the two stacks. Grab the handles.
    Keeping your back straight and core engaged, raise your arms out to your sides, palms facing forward, 
    and walk a step or two forward in order to create tension on the cables. Stand with one 
    foot in front of the other. Bend your elbows slightly, making sure not to let them travel behind your shoulders. 
    This is your starting position. Pull your hands toward each other in wide arcs in front of you, pausing when your hands touch before 
    slowly returning to the starting position. Alternate your forward foot with each set.
    preform 10-12 reps at a weight that does not cause you to use bad form.'
    );


    insert into back_and_bi (workout_name, workout_description)
    
    values ('deadlift', 
        'exercise in which a loaded barbell or bar is lifted off the ground to the level of the hips, torso 
    perpendicular to the floor, before being placed back on the ground. 
    It is one of the three powerlifting exercises, along with the squat and bench press.');

    insert into back_and_bi (workout_name, workout_description)

    values ('bent_over_row', 
        'Lift the bar from the rack, bend forward at the hips, and keep the back straight with a slight bend 
    in the knees. Lower the bar towards the floor until the elbows are completely straight, and keep the back flat as the
    bar is pulled towards the belly button. Then slowly lower the bar to the starting position and repeat.');

    insert into back_and_bi (workout_name, workout_description)

    values('pull_up', 
        'an exercise involving raising oneself with ones arms by pulling up against a horizontal bar fixed above ones head.');

    insert into back_and_bi (workout_name, workout_description)

    values('seated_row', 
        'Sit upright on the bench and plant your feet on the floor or foot pads, knees bent. Extend your arms 
    and hold the handle or cable. Move your shoulders back and down. Brace your core.
    Exhale. Bend your elbows to pull the handle or cable, keeping your elbows tucked in and your back neutral. Pause for 1 second.
    Inhale and slowly extend your arms, counting to 3.
    Complete one set of 12 to 15 reps.');

    insert into back_and_bi (workout_name, workout_description)

    values('barbell_curl', 
        'Perform barbell curls by grabbing a barbell with a shoulder-width supinated grip (palms facing towards your body).
    Hinge your elbows, and lift the barbell toward your chest.');

    insert into back_and_bi (workout_name, workout_description)

    values('chin_up', 
        'exercise in which one hangs by the hands from a support (such as a horizontal bar) and 
    pulls oneself up until the chin is level with the support specifically : such an exercise done with the palms facing inward — compare pull-up.');

    insert into back_and_bi (workout_name, workout_description)

    values('hammer_curl', 
        'Hammer curls are a variation of a standard bicep curl where your palms point towards each other 
    instead of facing upwards');

    insert into back_and_bi (workout_name, workout_description)

    values('incline_dumbbell_curl', 
        'Sit down against the workout bench, keeping your back straight and your abdominal muscles tight. ...
    When you"ve gotten the starting position down, lift each dumbbell, palms up, toward your shoulders. ...
    Slowly lower the dumbbells back down to your starting position.'
    );

    insert into chest_and_tri (workout_name, workout_description)
        
    values('incline_push_up', 
        'Your upper body is elevated with an exercise box or other piece of equipment. ... While traditional pushups 
    work your chest, arms, and shoulders, incline pushups take some of the pressure 
    off your arms and shoulders to give you a solid chest workout.');

    insert into chest_and_tri (workout_name, workout_description)
    
    values('flat_bench_press',         
        'Lie down on the flat bench so that your neck and head are supported. Your knees should be at a 90-degree angle with your feet flat on the floor. If your back comes off the bench, you might consider putting your feet on the 
    bench instead of the floor. Position yourself underneath the bar so that the bar is in line with your chest. Place your hands 
    slightly wider than your shoulders, with your elbows flexed at a 90-degree angle. 
    Grasp the bar, palms facing away from you, with your fingers wrapped around it.
    Exhale, squeeze your core, and push the barbell off the rack and up toward the ceiling using your pectoral muscles. Straighten your arms out in the contracted position, and squeeze your chest.
    Inhale and bring the barbell down slowly to your chest, again about an inch away. It should take you twice as long to bring the barbell down as it does to push it up.
    Explode back up to your starting position using your pectoral muscles. Do 12 repetitions');
    
    insert into chest_and_tri (workout_name, workout_description)

    values('decline_bench_press', 
        'In a decline bench press, the bench is set to 15 to 30 degrees on a decline. This angle places your 
    upper body on a downward slope, which activates the lower pectoral muscles as you push weights away from 
    your body.');

    insert into chest_and_tri (workout_name, workout_description)

    values('incline_bench_press', 
        'Lie back on an incline bench. Make sure the bench is adjusted to between 15 and 30 degrees on an incline. 
    Anything higher than 30 degrees mainly works the anterior deltoids (shoulders). Your grip should be where your 
    elbows make a 90-degree angle. Using a shoulder-width grip, wrap your fingers around the bar with your 
    palms facing away from you. Lift the bar up from the rack and hold it straight over you with your arms 
    locked.As you breathe in, come down slowly until the bar is an inch away from your chest. You want the 
    arm to be in line with your upper chest the whole time. Your arms should be at a 45-degree angle and 
    tucked into your sides. Hold this position for one count at the bottom of this movement and, with 
    one big exhale, push the bar back up to your starting position. Lock your arms, hold, and come down slowly.
    Do 12 repetitions and then place the bar back on the rack.');
    
    insert into chest_and_tri (workout_name, workout_description)

    values('bench_dips', 
        'bodyweight exercise designed to activate muscles in your arms, shoulders, and chest. They are also 
    known as triceps dips. Perform bench dips by sitting on a bench or elevated surface with your lower body 
    extended to the floor in front of you.');
    
    insert into chest_and_tri (workout_name, workout_description)

    values('dumbbell_tricep_extension', 
        'Lift the dumbbell until your arms are fully extended with palms facing the roof and elbows pointing 
    forward. This is the start position. Bending at the elbows and squeezing your triceps, slowly lower the 
    dumbbell behind your head. Slowly return to start position and repeat.');
    
    insert into chest_and_tri (workout_name, workout_description)

    values('push_ups', 
        'exercise performed in a prone position by raising and lowering the body with the straightening and 
    bending of the arms while keeping the back straight and supporting the body on the hands and toes.');

    insert into chest_and_tri (workout_name, workout_description)
    
    values('reverse_grip_bench_press', 'The reverse grip bench press is a barbell bench press variation that alternates the lifters grip and 
    has the knuckles point towards their feet. This reverse grip causes more elbow tucking, which ends up working 
    the upper chest, front delts, and biceps more than the standard bench press grip.'
    
    );


    insert into leg_day (workout_name, workout_description)
        
    values('back_squat', 
        'Sit back into hips and keep the back straight and the chest up, squatting down so the hips are below 
    the knees. From the bottom of the squat, press feet into the ground and push hips forward to return to 
    the top of the standing position.');

    insert into leg_day (workout_name, workout_description)
    
    values('front_squat', 
        'A front squat is a squat that is performed while holding a barbell except, unlike with a back squat, 
    the bar is held in front of the chest. This places more force on the upper body while still working the 
    glutes, hamstrings, and hips.');
    
    insert into leg_day (workout_name, workout_description)

    values('romanian_deadlift', 
        'Load a barbell and stand with your feet shoulder-width apart and toes forwards. Position the barbell
    so that its over your shoelaces when you look straight down. Bend down and grab the bar with a slightly 
    wider than shoulder-width grip, be sure to keep your back flat and shoulders over the barbell. Once you 
    have stood up, be sure to brace.Once you have set the back, brace the core and push the hips back while 
    maintaining a flat back. Keep the knees positioned over the ankles. Once you have assumed a position in 
    which the hamstrings are contracted, the back is flat, and the barbell is a few inches below the knee, stand 
    up, keeping the barbell close to your body. At the top of the movement, contract the upper back, core, and glutes 
    by flexing from the middle of the back to the buttocks (glutes). Repeat for repetitions.');

    insert into leg_day (workout_name, workout_description)

    values('walking_lunges', 
        'Walking lunges are a variation on the static lunge exercise. Instead of standing back upright after performing
    a lunge on one leg, as you would in a static bodyweight lunge, you “walk” forward by lunging out with the 
    other leg. The movement continues for a set number of reps');

    insert into leg_day (workout_name, workout_description)

    values('reverse_lunge',    
        'exercise that works muscle groups throughout your lower body. Perform reverse lunges by taking a step 
    backwards, keeping your upper body aligned and your back straight. Lower yourself enough for your front leg 
    to be at a 90-degree angle.');

    insert into leg_day (workout_name, workout_description)

    values('lateral_lunge', 
        'exercise moving in the frontal instead of saggital plane, emphasizing hip and adductor strength and stability. 
    Execution. With a barbell on your back, take a very wide stance with the toes turned out.');

    insert into leg_day (workout_name, workout_description)

    values('step_up', 
        'standing in front of an elevated, knee-height surface like a plyometric box or bench. Place your right 
    foot on top of the elevated surface and push through your right leg to lift your body up onto it.'
    );

    `).then(()=> {
        console.log('DB seeded')
        res.sendStatus(200)
    }).catch(err => console.log('error sending DB', err))
}
}